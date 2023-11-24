module.exports = async function (context, req) {
  const date = "2023-11-24T01:48:00.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

