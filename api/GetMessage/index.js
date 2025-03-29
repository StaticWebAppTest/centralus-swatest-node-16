module.exports = async function (context, req) {
  const date = "2025-03-29T09:12:07.205Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

