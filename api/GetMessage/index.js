module.exports = async function (context, req) {
  const date = "2022-04-03T06:12:26.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

