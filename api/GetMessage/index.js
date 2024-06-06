module.exports = async function (context, req) {
  const date = "2024-06-06T22:09:14.475Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

