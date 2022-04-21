module.exports = async function (context, req) {
  const date = "2022-04-21T18:14:23.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

