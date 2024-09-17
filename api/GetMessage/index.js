module.exports = async function (context, req) {
  const date = "2024-09-17T20:12:02.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

