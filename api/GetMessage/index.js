module.exports = async function (context, req) {
  const date = "2025-06-12T14:13:54.230Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

