module.exports = async function (context, req) {
  const date = "2023-08-06T22:07:32.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

