module.exports = async function (context, req) {
  const date = "2023-02-20T21:08:44.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

