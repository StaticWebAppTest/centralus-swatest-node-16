module.exports = async function (context, req) {
  const date = "2022-06-04T15:09:46.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

