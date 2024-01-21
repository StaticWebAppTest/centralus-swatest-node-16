module.exports = async function (context, req) {
  const date = "2024-01-21T17:08:08.649Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

