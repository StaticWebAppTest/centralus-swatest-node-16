module.exports = async function (context, req) {
  const date = "2024-10-01T09:12:56.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

