module.exports = async function (context, req) {
  const date = "2022-07-19T05:02:16.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

