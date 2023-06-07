module.exports = async function (context, req) {
  const date = "2023-06-07T04:10:54.167Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

