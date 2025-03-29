module.exports = async function (context, req) {
  const date = "2025-03-29T10:11:45.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

