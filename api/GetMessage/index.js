module.exports = async function (context, req) {
  const date = "2024-09-02T10:11:59.102Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

