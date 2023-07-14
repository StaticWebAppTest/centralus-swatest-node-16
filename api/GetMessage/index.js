module.exports = async function (context, req) {
  const date = "2023-07-14T01:01:31.035Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

