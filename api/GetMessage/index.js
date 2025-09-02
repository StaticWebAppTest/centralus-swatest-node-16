module.exports = async function (context, req) {
  const date = "2025-09-02T15:13:40.795Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

