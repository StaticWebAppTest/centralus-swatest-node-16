module.exports = async function (context, req) {
  const date = "2022-07-21T22:10:43.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

