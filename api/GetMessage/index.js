module.exports = async function (context, req) {
  const date = "2022-07-21T18:13:49.894Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

