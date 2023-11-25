module.exports = async function (context, req) {
  const date = "2023-11-25T17:07:24.815Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

