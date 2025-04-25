module.exports = async function (context, req) {
  const date = "2025-04-25T09:13:54.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

