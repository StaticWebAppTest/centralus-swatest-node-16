module.exports = async function (context, req) {
  const date = "2022-07-23T18:12:26.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

