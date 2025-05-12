module.exports = async function (context, req) {
  const date = "2025-05-12T15:15:13.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

