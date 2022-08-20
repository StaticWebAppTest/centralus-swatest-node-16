module.exports = async function (context, req) {
  const date = "2022-08-20T15:10:50.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

