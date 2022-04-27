module.exports = async function (context, req) {
  const date = "2022-04-27T04:36:21.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

