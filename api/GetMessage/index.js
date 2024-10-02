module.exports = async function (context, req) {
  const date = "2024-10-02T06:16:34.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

