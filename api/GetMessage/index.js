module.exports = async function (context, req) {
  const date = "2024-06-12T06:13:55.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

