module.exports = async function (context, req) {
  const date = "2022-11-16T05:10:03.525Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

