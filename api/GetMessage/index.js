module.exports = async function (context, req) {
  const date = "2024-12-21T13:14:22.926Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

