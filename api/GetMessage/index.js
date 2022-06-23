module.exports = async function (context, req) {
  const date = "2022-06-23T23:10:54.210Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

