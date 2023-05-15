module.exports = async function (context, req) {
  const date = "2023-05-15T17:07:47.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

