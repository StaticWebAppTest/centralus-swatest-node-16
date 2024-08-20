module.exports = async function (context, req) {
  const date = "2024-08-20T14:10:24.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

