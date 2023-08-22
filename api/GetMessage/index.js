module.exports = async function (context, req) {
  const date = "2023-08-22T13:10:39.258Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

