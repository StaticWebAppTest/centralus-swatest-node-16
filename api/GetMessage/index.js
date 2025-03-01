module.exports = async function (context, req) {
  const date = "2025-03-01T11:08:54.989Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

