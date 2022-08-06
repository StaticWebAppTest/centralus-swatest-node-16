module.exports = async function (context, req) {
  const date = "2022-08-06T23:10:57.739Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

