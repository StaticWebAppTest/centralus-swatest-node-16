module.exports = async function (context, req) {
  const date = "2025-12-02T23:13:07.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

