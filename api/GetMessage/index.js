module.exports = async function (context, req) {
  const date = "2024-08-10T03:13:43.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

