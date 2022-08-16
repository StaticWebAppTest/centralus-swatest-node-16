module.exports = async function (context, req) {
  const date = "2022-08-16T11:08:32.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

