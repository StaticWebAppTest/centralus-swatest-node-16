module.exports = async function (context, req) {
  const date = "2022-08-05T07:10:00.751Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

