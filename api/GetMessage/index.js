module.exports = async function (context, req) {
  const date = "2022-07-26T20:11:50.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

