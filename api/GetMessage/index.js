module.exports = async function (context, req) {
  const date = "2025-02-13T14:11:42.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

