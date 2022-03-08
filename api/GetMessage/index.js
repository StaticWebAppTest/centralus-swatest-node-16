module.exports = async function (context, req) {
  const date = "2022-03-08T15:10:15.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

