module.exports = async function (context, req) {
  const date = "2022-04-18T04:17:18.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

