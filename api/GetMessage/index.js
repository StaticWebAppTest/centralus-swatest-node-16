module.exports = async function (context, req) {
  const date = "2024-11-02T12:20:39.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

