module.exports = async function (context, req) {
  const date = "2024-04-29T05:11:31.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

