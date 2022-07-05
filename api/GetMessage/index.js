module.exports = async function (context, req) {
  const date = "2022-07-05T23:11:31.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

