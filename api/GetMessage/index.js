module.exports = async function (context, req) {
  const date = "2023-01-21T05:08:28.446Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

