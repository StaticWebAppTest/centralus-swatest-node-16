module.exports = async function (context, req) {
  const date = "2024-11-21T19:09:40.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

