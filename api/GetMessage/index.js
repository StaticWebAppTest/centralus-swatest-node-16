module.exports = async function (context, req) {
  const date = "2022-11-27T04:11:53.143Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

