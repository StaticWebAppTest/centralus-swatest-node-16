module.exports = async function (context, req) {
  const date = "2024-01-29T14:08:21.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

