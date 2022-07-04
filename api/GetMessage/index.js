module.exports = async function (context, req) {
  const date = "2022-07-04T20:11:00.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

