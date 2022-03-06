module.exports = async function (context, req) {
  const date = "2022-03-06T20:10:54.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

