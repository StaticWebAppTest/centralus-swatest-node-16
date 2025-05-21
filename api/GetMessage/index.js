module.exports = async function (context, req) {
  const date = "2025-05-21T11:11:28.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

