module.exports = async function (context, req) {
  const date = "2023-09-14T01:41:14.518Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

