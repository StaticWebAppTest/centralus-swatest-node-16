module.exports = async function (context, req) {
  const date = "2022-11-07T04:36:02.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

