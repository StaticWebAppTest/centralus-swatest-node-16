module.exports = async function (context, req) {
  const date = "2025-06-13T14:13:19.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

