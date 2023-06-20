module.exports = async function (context, req) {
  const date = "2023-06-20T15:08:49.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

