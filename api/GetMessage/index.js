module.exports = async function (context, req) {
  const date = "2025-02-11T13:19:29.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

