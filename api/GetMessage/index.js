module.exports = async function (context, req) {
  const date = "2023-09-16T00:39:14.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

