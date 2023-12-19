module.exports = async function (context, req) {
  const date = "2023-12-19T04:11:27.548Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

