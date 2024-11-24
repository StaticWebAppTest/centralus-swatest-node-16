module.exports = async function (context, req) {
  const date = "2024-11-24T20:12:12.379Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

