module.exports = async function (context, req) {
  const date = "2023-06-21T12:18:02.835Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

