module.exports = async function (context, req) {
  const date = "2024-06-12T16:12:22.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

