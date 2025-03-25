module.exports = async function (context, req) {
  const date = "2025-03-25T04:15:09.692Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

