module.exports = async function (context, req) {
  const date = "2024-09-09T22:10:15.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

