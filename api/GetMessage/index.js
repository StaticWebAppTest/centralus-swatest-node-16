module.exports = async function (context, req) {
  const date = "2024-06-14T23:09:58.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

