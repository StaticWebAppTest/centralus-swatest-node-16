module.exports = async function (context, req) {
  const date = "2022-03-07T15:10:14.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

