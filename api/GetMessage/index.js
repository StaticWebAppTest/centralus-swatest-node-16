module.exports = async function (context, req) {
  const date = "2024-03-16T12:17:07.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

