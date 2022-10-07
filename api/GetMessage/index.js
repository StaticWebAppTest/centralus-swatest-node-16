module.exports = async function (context, req) {
  const date = "2022-10-07T20:14:14.602Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

