module.exports = async function (context, req) {
  const date = "2025-02-08T17:09:17.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

