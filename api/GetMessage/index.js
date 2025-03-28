module.exports = async function (context, req) {
  const date = "2025-03-28T11:10:37.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

