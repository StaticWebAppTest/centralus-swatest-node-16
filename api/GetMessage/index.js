module.exports = async function (context, req) {
  const date = "2025-05-06T14:13:28.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

