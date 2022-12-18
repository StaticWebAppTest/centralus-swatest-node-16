module.exports = async function (context, req) {
  const date = "2022-12-18T12:15:46.197Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

