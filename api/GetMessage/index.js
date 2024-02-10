module.exports = async function (context, req) {
  const date = "2024-02-10T00:39:46.488Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

