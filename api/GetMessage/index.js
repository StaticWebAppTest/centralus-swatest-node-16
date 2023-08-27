module.exports = async function (context, req) {
  const date = "2023-08-27T01:43:41.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

