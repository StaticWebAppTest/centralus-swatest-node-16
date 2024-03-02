module.exports = async function (context, req) {
  const date = "2024-03-02T19:06:34.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

