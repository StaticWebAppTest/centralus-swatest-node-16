module.exports = async function (context, req) {
  const date = "2023-05-12T09:08:47.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

