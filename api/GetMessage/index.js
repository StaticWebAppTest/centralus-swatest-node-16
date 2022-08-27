module.exports = async function (context, req) {
  const date = "2022-08-27T04:51:55.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

