module.exports = async function (context, req) {
  const date = "2022-06-09T00:55:14.710Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

