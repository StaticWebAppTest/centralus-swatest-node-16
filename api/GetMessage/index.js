module.exports = async function (context, req) {
  const date = "2022-04-23T12:17:17.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

