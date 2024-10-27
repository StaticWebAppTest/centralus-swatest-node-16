module.exports = async function (context, req) {
  const date = "2024-10-27T20:12:03.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

