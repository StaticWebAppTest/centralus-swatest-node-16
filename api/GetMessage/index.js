module.exports = async function (context, req) {
  const date = "2023-09-07T10:09:19.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

