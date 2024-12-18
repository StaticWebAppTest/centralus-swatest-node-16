module.exports = async function (context, req) {
  const date = "2024-12-18T13:21:18.050Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

