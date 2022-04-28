module.exports = async function (context, req) {
  const date = "2022-04-28T08:16:40.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

