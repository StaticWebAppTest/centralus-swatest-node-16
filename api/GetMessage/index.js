module.exports = async function (context, req) {
  const date = "2022-05-03T04:24:58.658Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

