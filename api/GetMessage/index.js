module.exports = async function (context, req) {
  const date = "2022-04-16T20:10:37.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

