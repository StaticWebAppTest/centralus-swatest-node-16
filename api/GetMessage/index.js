module.exports = async function (context, req) {
  const date = "2024-06-20T11:08:16.135Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

