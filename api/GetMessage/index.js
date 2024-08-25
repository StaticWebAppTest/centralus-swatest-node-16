module.exports = async function (context, req) {
  const date = "2024-08-25T02:08:26.728Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

