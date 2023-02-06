module.exports = async function (context, req) {
  const date = "2023-02-06T17:07:47.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

