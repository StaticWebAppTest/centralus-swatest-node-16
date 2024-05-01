module.exports = async function (context, req) {
  const date = "2024-05-01T13:10:14.873Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

