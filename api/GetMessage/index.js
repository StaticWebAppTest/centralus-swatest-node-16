module.exports = async function (context, req) {
  const date = "2023-01-14T17:07:44.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

