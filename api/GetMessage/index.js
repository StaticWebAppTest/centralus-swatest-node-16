module.exports = async function (context, req) {
  const date = "2024-04-18T06:12:49.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

