module.exports = async function (context, req) {
  const date = "2022-12-27T04:11:27.509Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

