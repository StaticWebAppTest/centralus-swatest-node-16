module.exports = async function (context, req) {
  const date = "2024-05-04T00:42:56.206Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

