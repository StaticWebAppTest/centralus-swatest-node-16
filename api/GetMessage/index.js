module.exports = async function (context, req) {
  const date = "2024-10-16T10:12:34.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

