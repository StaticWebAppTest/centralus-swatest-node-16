module.exports = async function (context, req) {
  const date = "2023-09-20T17:07:56.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

