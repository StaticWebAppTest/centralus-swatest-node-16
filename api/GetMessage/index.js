module.exports = async function (context, req) {
  const date = "2022-12-26T08:12:40.456Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

