module.exports = async function (context, req) {
  const date = "2022-09-15T23:14:16.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

