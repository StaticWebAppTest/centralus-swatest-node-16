module.exports = async function (context, req) {
  const date = "2025-07-24T12:30:15.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

