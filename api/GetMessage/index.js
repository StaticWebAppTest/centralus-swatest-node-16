module.exports = async function (context, req) {
  const date = "2023-03-16T00:54:11.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

