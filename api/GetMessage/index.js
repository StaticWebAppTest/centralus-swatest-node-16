module.exports = async function (context, req) {
  const date = "2023-07-21T08:11:29.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

