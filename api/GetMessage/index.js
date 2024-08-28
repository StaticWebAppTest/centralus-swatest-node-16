module.exports = async function (context, req) {
  const date = "2024-08-28T22:10:14.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

