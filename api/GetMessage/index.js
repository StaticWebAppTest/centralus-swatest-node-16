module.exports = async function (context, req) {
  const date = "2022-10-07T04:45:15.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

