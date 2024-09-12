module.exports = async function (context, req) {
  const date = "2024-09-12T23:13:03.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

