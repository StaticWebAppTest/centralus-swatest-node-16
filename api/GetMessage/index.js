module.exports = async function (context, req) {
  const date = "2024-12-01T13:19:34.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

