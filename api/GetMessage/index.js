module.exports = async function (context, req) {
  const date = "2024-01-02T12:16:32.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

