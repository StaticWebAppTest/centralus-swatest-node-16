module.exports = async function (context, req) {
  const date = "2024-06-20T19:08:42.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

