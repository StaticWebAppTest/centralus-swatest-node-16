module.exports = async function (context, req) {
  const date = "2024-07-14T17:15:28.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

