module.exports = async function (context, req) {
  const date = "2024-05-14T06:14:28.983Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

