module.exports = async function (context, req) {
  const date = "2024-12-20T16:13:51.733Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

