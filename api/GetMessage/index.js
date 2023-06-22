module.exports = async function (context, req) {
  const date = "2023-06-22T10:09:31.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

