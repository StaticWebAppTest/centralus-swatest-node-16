module.exports = async function (context, req) {
  const date = "2025-04-14T15:14:04.241Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

