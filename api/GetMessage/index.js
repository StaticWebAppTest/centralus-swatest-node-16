module.exports = async function (context, req) {
  const date = "2023-02-25T05:09:12.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

