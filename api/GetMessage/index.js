module.exports = async function (context, req) {
  const date = "2022-08-03T03:48:31.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

