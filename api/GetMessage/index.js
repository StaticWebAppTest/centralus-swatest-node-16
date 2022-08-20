module.exports = async function (context, req) {
  const date = "2022-08-20T05:13:22.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

