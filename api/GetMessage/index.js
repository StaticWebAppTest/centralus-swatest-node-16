module.exports = async function (context, req) {
  const date = "2022-09-05T07:25:14.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

