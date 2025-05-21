module.exports = async function (context, req) {
  const date = "2025-05-21T05:13:38.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

