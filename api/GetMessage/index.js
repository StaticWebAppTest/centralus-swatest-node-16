module.exports = async function (context, req) {
  const date = "2025-03-13T10:13:43.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

