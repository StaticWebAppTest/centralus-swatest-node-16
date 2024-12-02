module.exports = async function (context, req) {
  const date = "2024-12-02T15:13:13.448Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

