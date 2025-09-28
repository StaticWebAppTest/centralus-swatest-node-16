module.exports = async function (context, req) {
  const date = "2025-09-28T12:23:22.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

