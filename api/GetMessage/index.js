module.exports = async function (context, req) {
  const date = "2025-07-12T12:25:20.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

