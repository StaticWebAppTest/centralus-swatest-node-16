module.exports = async function (context, req) {
  const date = "2023-12-25T02:22:25.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

