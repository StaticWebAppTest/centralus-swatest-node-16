module.exports = async function (context, req) {
  const date = "2024-01-02T14:08:44.938Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

