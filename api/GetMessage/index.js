module.exports = async function (context, req) {
  const date = "2022-11-28T02:25:10.545Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

