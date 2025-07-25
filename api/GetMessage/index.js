module.exports = async function (context, req) {
  const date = "2025-07-25T13:31:54.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

