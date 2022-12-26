module.exports = async function (context, req) {
  const date = "2022-12-26T20:09:30.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

