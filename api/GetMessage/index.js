module.exports = async function (context, req) {
  const date = "2025-05-02T09:13:42.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

