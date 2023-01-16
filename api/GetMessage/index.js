module.exports = async function (context, req) {
  const date = "2023-01-16T04:12:03.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

