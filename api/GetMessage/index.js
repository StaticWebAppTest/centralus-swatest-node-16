module.exports = async function (context, req) {
  const date = "2022-07-26T07:10:24.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

