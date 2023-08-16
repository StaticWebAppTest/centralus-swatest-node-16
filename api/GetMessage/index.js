module.exports = async function (context, req) {
  const date = "2023-08-16T07:07:48.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

