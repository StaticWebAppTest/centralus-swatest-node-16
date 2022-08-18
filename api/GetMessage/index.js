module.exports = async function (context, req) {
  const date = "2022-08-18T07:10:22.497Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

