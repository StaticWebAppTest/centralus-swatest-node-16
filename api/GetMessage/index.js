module.exports = async function (context, req) {
  const date = "2024-01-03T21:08:12.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

