module.exports = async function (context, req) {
  const date = "2022-08-08T08:16:34.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

