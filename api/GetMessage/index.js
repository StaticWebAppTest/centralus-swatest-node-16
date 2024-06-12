module.exports = async function (context, req) {
  const date = "2024-06-12T01:56:51.187Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

