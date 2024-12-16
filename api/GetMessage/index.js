module.exports = async function (context, req) {
  const date = "2024-12-16T13:23:34.344Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

