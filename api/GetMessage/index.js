module.exports = async function (context, req) {
  const date = "2023-12-26T10:09:27.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

