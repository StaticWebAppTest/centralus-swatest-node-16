module.exports = async function (context, req) {
  const date = "2025-10-16T19:09:20.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

