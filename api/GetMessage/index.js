module.exports = async function (context, req) {
  const date = "2022-12-20T13:15:37.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

