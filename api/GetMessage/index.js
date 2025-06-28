module.exports = async function (context, req) {
  const date = "2025-06-28T12:24:45.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

