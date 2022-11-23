module.exports = async function (context, req) {
  const date = "2022-11-23T04:12:40.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

