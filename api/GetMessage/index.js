module.exports = async function (context, req) {
  const date = "2024-01-05T18:11:28.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

