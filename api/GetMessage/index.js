module.exports = async function (context, req) {
  const date = "2024-06-12T19:09:06.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

