module.exports = async function (context, req) {
  const date = "2022-05-04T08:14:26.994Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

