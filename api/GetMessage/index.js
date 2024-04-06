module.exports = async function (context, req) {
  const date = "2024-04-06T13:10:01.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

