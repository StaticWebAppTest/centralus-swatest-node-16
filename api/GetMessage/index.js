module.exports = async function (context, req) {
  const date = "2024-03-09T17:07:15.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

