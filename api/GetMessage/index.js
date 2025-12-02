module.exports = async function (context, req) {
  const date = "2025-12-02T11:13:46.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

