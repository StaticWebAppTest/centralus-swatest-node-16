module.exports = async function (context, req) {
  const date = "2022-03-05T13:12:40.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

