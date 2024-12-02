module.exports = async function (context, req) {
  const date = "2024-12-02T06:18:46.188Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

