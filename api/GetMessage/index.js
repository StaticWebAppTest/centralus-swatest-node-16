module.exports = async function (context, req) {
  const date = "2024-12-20T09:12:19.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

