module.exports = async function (context, req) {
  const date = "2023-06-21T19:06:58.666Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

