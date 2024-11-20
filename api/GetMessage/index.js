module.exports = async function (context, req) {
  const date = "2024-11-20T10:13:19.177Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

