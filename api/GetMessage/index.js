module.exports = async function (context, req) {
  const date = "2024-01-01T13:10:50.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

