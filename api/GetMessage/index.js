module.exports = async function (context, req) {
  const date = "2024-03-15T19:07:42.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

