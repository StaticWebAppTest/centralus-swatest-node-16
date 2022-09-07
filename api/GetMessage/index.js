module.exports = async function (context, req) {
  const date = "2022-09-07T04:19:11.139Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

