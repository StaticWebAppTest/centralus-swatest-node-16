module.exports = async function (context, req) {
  const date = "2022-08-30T15:11:39.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

