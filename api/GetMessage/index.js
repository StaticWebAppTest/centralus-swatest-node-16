module.exports = async function (context, req) {
  const date = "2022-12-27T02:05:53.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

