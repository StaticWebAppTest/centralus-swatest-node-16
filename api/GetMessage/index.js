module.exports = async function (context, req) {
  const date = "2022-06-21T08:18:21.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

