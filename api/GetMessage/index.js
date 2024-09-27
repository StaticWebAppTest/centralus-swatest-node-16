module.exports = async function (context, req) {
  const date = "2024-09-27T14:11:16.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

