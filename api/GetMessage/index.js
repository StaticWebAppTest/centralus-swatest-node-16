module.exports = async function (context, req) {
  const date = "2024-06-23T10:10:45.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

