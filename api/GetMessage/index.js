module.exports = async function (context, req) {
  const date = "2024-06-06T21:10:24.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

