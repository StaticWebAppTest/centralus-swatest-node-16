module.exports = async function (context, req) {
  const date = "2023-06-21T21:08:51.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

