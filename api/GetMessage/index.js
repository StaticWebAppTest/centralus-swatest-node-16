module.exports = async function (context, req) {
  const date = "2025-04-10T14:12:53.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

