module.exports = async function (context, req) {
  const date = "2025-03-31T21:12:07.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

