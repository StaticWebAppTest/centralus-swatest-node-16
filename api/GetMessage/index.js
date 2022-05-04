module.exports = async function (context, req) {
  const date = "2022-05-04T16:16:58.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

