module.exports = async function (context, req) {
  const date = "2023-05-09T15:09:36.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

