module.exports = async function (context, req) {
  const date = "2024-05-05T23:09:05.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

