module.exports = async function (context, req) {
  const date = "2023-09-04T02:15:35.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

