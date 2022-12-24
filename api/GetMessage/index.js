module.exports = async function (context, req) {
  const date = "2022-12-24T20:09:05.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

