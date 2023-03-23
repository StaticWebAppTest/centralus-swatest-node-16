module.exports = async function (context, req) {
  const date = "2023-03-23T12:18:22.543Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

