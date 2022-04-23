module.exports = async function (context, req) {
  const date = "2022-04-23T21:09:09.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

