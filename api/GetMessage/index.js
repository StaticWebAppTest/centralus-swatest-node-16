module.exports = async function (context, req) {
  const date = "2022-09-07T21:10:55.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

