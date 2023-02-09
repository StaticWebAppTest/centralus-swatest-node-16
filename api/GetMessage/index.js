module.exports = async function (context, req) {
  const date = "2023-02-09T12:19:44.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

