module.exports = async function (context, req) {
  const date = "2022-07-27T04:44:58.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

