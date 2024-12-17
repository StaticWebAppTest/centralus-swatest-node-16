module.exports = async function (context, req) {
  const date = "2024-12-17T18:17:54.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

