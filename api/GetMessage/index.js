module.exports = async function (context, req) {
  const date = "2024-11-02T13:16:31.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

