module.exports = async function (context, req) {
  const date = "2025-02-13T13:19:04.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

