module.exports = async function (context, req) {
  const date = "2023-12-31T17:07:47.415Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

