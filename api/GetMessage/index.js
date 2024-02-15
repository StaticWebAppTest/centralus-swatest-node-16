module.exports = async function (context, req) {
  const date = "2024-02-15T03:10:43.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

