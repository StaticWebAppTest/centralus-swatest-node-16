module.exports = async function (context, req) {
  const date = "2025-10-28T12:27:27.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

