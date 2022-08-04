module.exports = async function (context, req) {
  const date = "2022-08-04T04:36:18.409Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

