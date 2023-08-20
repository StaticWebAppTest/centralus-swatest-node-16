module.exports = async function (context, req) {
  const date = "2023-08-20T04:09:43.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

