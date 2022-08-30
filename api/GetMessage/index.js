module.exports = async function (context, req) {
  const date = "2022-08-30T22:11:51.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

