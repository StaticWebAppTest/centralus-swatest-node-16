module.exports = async function (context, req) {
  const date = "2022-08-10T21:10:08.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

