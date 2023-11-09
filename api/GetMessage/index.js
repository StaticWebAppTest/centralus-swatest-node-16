module.exports = async function (context, req) {
  const date = "2023-11-09T07:08:14.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

