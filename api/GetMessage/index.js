module.exports = async function (context, req) {
  const date = "2024-10-09T16:13:57.234Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

