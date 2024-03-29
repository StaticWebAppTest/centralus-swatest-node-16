module.exports = async function (context, req) {
  const date = "2024-03-29T02:15:40.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

