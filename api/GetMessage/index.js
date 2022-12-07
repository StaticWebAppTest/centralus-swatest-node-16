module.exports = async function (context, req) {
  const date = "2022-12-07T20:10:23.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

