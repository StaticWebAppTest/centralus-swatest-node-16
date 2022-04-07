module.exports = async function (context, req) {
  const date = "2022-04-07T23:10:42.321Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

