module.exports = async function (context, req) {
  const date = "2025-06-14T09:13:53.023Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

