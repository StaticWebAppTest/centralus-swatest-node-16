module.exports = async function (context, req) {
  const date = "2022-11-26T07:08:47.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

