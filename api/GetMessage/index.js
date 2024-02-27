module.exports = async function (context, req) {
  const date = "2024-02-27T14:08:12.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

