module.exports = async function (context, req) {
  const date = "2025-02-24T00:59:28.486Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

