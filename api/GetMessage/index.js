module.exports = async function (context, req) {
  const date = "2022-04-04T02:40:13.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

