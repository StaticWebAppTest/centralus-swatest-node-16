module.exports = async function (context, req) {
  const date = "2025-02-25T04:15:07.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

