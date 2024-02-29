module.exports = async function (context, req) {
  const date = "2024-02-29T05:10:51.251Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

