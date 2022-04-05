module.exports = async function (context, req) {
  const date = "2022-04-05T05:10:02.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

