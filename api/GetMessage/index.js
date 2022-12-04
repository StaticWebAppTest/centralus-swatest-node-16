module.exports = async function (context, req) {
  const date = "2022-12-04T02:14:58.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

