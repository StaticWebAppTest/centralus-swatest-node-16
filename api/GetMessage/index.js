module.exports = async function (context, req) {
  const date = "2023-01-23T10:10:28.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

