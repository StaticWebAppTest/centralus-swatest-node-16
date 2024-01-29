module.exports = async function (context, req) {
  const date = "2024-01-29T05:09:06.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

