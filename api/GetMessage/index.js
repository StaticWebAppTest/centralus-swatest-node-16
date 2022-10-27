module.exports = async function (context, req) {
  const date = "2022-10-27T21:10:26.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

