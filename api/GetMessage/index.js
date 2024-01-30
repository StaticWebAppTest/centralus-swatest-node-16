module.exports = async function (context, req) {
  const date = "2024-01-30T06:12:29.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

