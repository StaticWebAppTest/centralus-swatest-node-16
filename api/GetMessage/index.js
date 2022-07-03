module.exports = async function (context, req) {
  const date = "2022-07-03T05:09:57.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

