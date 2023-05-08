module.exports = async function (context, req) {
  const date = "2023-05-08T06:11:49.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

