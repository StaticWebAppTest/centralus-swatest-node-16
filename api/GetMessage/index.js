module.exports = async function (context, req) {
  const date = "2024-01-23T18:12:14.933Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

