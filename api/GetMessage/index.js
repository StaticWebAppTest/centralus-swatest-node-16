module.exports = async function (context, req) {
  const date = "2022-04-11T19:08:38.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

