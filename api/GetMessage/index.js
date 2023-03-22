module.exports = async function (context, req) {
  const date = "2023-03-22T03:09:47.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

