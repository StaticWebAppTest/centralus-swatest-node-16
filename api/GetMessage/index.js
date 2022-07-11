module.exports = async function (context, req) {
  const date = "2022-07-11T04:30:55.354Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

