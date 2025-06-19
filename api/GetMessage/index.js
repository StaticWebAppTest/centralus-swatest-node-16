module.exports = async function (context, req) {
  const date = "2025-06-19T12:27:47.396Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

