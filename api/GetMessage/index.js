module.exports = async function (context, req) {
  const date = "2025-03-02T14:10:30.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

