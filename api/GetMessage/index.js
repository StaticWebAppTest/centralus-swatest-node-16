module.exports = async function (context, req) {
  const date = "2025-05-08T17:11:38.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

