module.exports = async function (context, req) {
  const date = "2022-07-24T01:05:16.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

