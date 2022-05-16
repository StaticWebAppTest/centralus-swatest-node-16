module.exports = async function (context, req) {
  const date = "2022-05-16T09:11:26.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

