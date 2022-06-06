module.exports = async function (context, req) {
  const date = "2022-06-06T18:12:45.100Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

