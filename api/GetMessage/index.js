module.exports = async function (context, req) {
  const date = "2024-12-23T13:18:47.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

