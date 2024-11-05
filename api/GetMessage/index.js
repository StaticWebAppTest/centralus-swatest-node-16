module.exports = async function (context, req) {
  const date = "2024-11-05T10:12:44.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

