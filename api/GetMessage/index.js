module.exports = async function (context, req) {
  const date = "2025-12-28T13:24:48.796Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

