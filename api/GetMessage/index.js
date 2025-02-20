module.exports = async function (context, req) {
  const date = "2025-02-20T13:19:52.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

