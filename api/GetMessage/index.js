module.exports = async function (context, req) {
  const date = "2024-09-20T14:11:29.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

