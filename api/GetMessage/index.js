module.exports = async function (context, req) {
  const date = "2022-08-30T07:21:12.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

