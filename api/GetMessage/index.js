module.exports = async function (context, req) {
  const date = "2024-01-16T07:08:56.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

