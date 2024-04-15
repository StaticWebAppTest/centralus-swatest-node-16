module.exports = async function (context, req) {
  const date = "2024-04-15T11:06:47.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

