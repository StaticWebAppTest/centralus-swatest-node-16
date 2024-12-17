module.exports = async function (context, req) {
  const date = "2024-12-17T10:13:40.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

