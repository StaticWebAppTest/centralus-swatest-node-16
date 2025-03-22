module.exports = async function (context, req) {
  const date = "2025-03-22T10:13:00.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

