module.exports = async function (context, req) {
  const date = "2022-11-05T07:10:28.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

