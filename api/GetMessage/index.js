module.exports = async function (context, req) {
  const date = "2024-01-14T09:08:34.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

