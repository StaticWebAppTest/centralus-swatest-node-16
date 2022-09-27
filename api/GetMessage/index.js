module.exports = async function (context, req) {
  const date = "2022-09-27T18:20:42.336Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

