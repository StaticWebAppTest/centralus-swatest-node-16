module.exports = async function (context, req) {
  const date = "2024-01-23T19:07:32.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

