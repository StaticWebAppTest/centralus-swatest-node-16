module.exports = async function (context, req) {
  const date = "2025-03-13T13:21:50.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

