module.exports = async function (context, req) {
  const date = "2022-04-24T17:12:39.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

