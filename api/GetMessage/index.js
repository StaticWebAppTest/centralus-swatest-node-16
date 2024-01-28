module.exports = async function (context, req) {
  const date = "2024-01-28T19:06:20.106Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

