module.exports = async function (context, req) {
  const date = "2024-06-13T13:12:36.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

