module.exports = async function (context, req) {
  const date = "2024-10-04T20:12:31.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

