module.exports = async function (context, req) {
  const date = "2025-05-27T13:27:38.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

