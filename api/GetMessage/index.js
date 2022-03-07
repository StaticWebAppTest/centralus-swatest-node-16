module.exports = async function (context, req) {
  const date = "2022-03-07T20:10:54.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

