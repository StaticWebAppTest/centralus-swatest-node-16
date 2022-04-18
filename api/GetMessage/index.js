module.exports = async function (context, req) {
  const date = "2022-04-18T23:08:31.790Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

