module.exports = async function (context, req) {
  const date = "2022-08-05T17:20:08.136Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

