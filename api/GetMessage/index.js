module.exports = async function (context, req) {
  const date = "2022-04-21T00:54:53.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

