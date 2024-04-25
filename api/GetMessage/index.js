module.exports = async function (context, req) {
  const date = "2024-04-25T05:09:24.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

