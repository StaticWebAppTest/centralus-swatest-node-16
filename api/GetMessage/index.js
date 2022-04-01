module.exports = async function (context, req) {
  const date = "2022-04-01T18:13:17.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

