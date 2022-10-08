module.exports = async function (context, req) {
  const date = "2022-10-08T05:25:27.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

