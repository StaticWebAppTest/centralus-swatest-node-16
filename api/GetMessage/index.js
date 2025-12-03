module.exports = async function (context, req) {
  const date = "2025-12-03T13:31:06.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

