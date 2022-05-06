module.exports = async function (context, req) {
  const date = "2022-05-06T17:18:48.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

