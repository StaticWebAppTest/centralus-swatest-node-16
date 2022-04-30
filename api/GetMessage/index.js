module.exports = async function (context, req) {
  const date = "2022-04-30T02:55:42.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

