module.exports = async function (context, req) {
  const date = "2022-12-30T04:11:17.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

