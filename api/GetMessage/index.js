module.exports = async function (context, req) {
  const date = "2025-01-25T13:12:39.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

