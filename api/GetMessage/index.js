module.exports = async function (context, req) {
  const date = "2024-06-12T03:11:51.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

