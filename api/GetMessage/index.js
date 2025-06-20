module.exports = async function (context, req) {
  const date = "2025-06-20T14:13:07.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

