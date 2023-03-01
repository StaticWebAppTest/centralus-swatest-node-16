module.exports = async function (context, req) {
  const date = "2023-03-01T10:11:28.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

