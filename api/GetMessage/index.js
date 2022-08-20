module.exports = async function (context, req) {
  const date = "2022-08-20T23:10:13.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

