module.exports = async function (context, req) {
  const date = "2024-09-05T10:12:20.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

