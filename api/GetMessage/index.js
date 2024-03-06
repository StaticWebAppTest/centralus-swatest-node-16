module.exports = async function (context, req) {
  const date = "2024-03-06T21:08:13.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

