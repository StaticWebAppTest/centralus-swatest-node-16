module.exports = async function (context, req) {
  const date = "2024-09-01T13:15:14.854Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

