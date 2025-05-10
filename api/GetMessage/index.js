module.exports = async function (context, req) {
  const date = "2025-05-10T03:37:40.253Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

