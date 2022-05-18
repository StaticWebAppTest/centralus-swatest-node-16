module.exports = async function (context, req) {
  const date = "2022-05-18T07:10:48.609Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

