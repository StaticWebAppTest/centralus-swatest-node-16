module.exports = async function (context, req) {
  const date = "2023-09-16T07:07:08.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

