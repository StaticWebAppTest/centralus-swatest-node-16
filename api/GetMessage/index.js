module.exports = async function (context, req) {
  const date = "2024-09-16T13:20:22.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

