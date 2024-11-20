module.exports = async function (context, req) {
  const date = "2024-11-20T21:11:28.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

