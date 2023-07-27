module.exports = async function (context, req) {
  const date = "2023-07-27T04:10:10.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

