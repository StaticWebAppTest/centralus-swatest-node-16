module.exports = async function (context, req) {
  const date = "2025-01-28T11:09:37.709Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

