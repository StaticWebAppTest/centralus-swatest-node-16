module.exports = async function (context, req) {
  const date = "2022-10-07T23:14:39.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

