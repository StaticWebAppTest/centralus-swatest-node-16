module.exports = async function (context, req) {
  const date = "2023-09-19T01:43:30.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

