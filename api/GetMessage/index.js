module.exports = async function (context, req) {
  const date = "2022-04-08T23:10:18.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

