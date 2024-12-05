module.exports = async function (context, req) {
  const date = "2024-12-05T10:13:53.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

