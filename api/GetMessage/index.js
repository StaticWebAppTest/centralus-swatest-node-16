module.exports = async function (context, req) {
  const date = "2025-03-02T11:09:56.970Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

