module.exports = async function (context, req) {
  const date = "2023-03-25T05:08:17.072Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

