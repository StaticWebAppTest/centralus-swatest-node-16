module.exports = async function (context, req) {
  const date = "2023-02-26T14:08:28.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

