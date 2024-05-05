module.exports = async function (context, req) {
  const date = "2024-05-05T05:09:30.736Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

