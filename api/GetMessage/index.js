module.exports = async function (context, req) {
  const date = "2022-03-25T05:09:59.817Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

