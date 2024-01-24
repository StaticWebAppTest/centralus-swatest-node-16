module.exports = async function (context, req) {
  const date = "2024-01-24T07:09:15.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

