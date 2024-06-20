module.exports = async function (context, req) {
  const date = "2024-06-20T16:13:25.911Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

