module.exports = async function (context, req) {
  const date = "2025-05-13T14:13:47.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

