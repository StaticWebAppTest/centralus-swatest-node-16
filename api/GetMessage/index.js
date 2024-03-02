module.exports = async function (context, req) {
  const date = "2024-03-02T17:07:00.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

