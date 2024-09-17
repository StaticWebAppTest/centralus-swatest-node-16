module.exports = async function (context, req) {
  const date = "2024-09-17T16:14:05.927Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

