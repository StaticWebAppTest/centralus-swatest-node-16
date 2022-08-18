module.exports = async function (context, req) {
  const date = "2022-08-18T22:11:27.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

