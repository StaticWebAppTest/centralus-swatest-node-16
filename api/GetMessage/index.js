module.exports = async function (context, req) {
  const date = "2024-06-02T19:07:33.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

