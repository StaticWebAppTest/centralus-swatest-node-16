module.exports = async function (context, req) {
  const date = "2025-02-25T11:10:28.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

