module.exports = async function (context, req) {
  const date = "2022-12-03T19:07:13.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

