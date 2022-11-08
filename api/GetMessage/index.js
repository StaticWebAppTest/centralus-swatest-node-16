module.exports = async function (context, req) {
  const date = "2022-11-08T15:12:04.549Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

