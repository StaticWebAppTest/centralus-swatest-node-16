module.exports = async function (context, req) {
  const date = "2025-12-25T13:27:30.906Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

