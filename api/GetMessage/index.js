module.exports = async function (context, req) {
  const date = "2025-05-12T22:13:02.227Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

