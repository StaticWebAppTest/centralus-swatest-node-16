module.exports = async function (context, req) {
  const date = "2022-07-26T15:12:18.918Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

