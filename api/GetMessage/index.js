module.exports = async function (context, req) {
  const date = "2025-12-13T09:13:20.586Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

