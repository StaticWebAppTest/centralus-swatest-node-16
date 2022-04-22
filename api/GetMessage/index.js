module.exports = async function (context, req) {
  const date = "2022-04-22T21:09:45.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

