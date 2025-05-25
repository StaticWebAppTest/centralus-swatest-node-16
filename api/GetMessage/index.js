module.exports = async function (context, req) {
  const date = "2025-05-25T10:12:25.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

