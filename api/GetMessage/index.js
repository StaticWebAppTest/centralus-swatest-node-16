module.exports = async function (context, req) {
  const date = "2022-08-03T23:11:47.217Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

