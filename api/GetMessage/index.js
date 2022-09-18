module.exports = async function (context, req) {
  const date = "2022-09-18T09:11:15.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

