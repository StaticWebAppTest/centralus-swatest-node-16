module.exports = async function (context, req) {
  const date = "2024-09-21T07:10:12.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

