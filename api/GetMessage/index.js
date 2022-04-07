module.exports = async function (context, req) {
  const date = "2022-04-07T08:13:17.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

