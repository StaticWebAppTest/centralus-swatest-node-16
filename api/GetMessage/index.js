module.exports = async function (context, req) {
  const date = "2024-03-27T10:09:54.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

