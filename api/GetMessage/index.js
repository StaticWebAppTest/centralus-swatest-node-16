module.exports = async function (context, req) {
  const date = "2025-01-13T19:09:20.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

