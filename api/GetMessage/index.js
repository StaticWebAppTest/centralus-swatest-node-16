module.exports = async function (context, req) {
  const date = "2024-07-14T15:15:56.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

