module.exports = async function (context, req) {
  const date = "2022-09-08T04:02:20.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

