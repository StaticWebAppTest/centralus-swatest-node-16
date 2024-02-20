module.exports = async function (context, req) {
  const date = "2024-02-20T10:09:28.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

