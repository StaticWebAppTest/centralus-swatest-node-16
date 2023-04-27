module.exports = async function (context, req) {
  const date = "2023-04-27T10:09:44.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

