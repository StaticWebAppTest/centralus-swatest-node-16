module.exports = async function (context, req) {
  const date = "2023-06-19T20:09:10.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

