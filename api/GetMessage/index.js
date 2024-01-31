module.exports = async function (context, req) {
  const date = "2024-01-31T06:12:00.662Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

