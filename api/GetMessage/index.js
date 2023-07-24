module.exports = async function (context, req) {
  const date = "2023-07-24T04:10:53.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

