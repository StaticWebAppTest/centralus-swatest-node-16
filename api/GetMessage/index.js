module.exports = async function (context, req) {
  const date = "2022-12-03T04:11:23.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

