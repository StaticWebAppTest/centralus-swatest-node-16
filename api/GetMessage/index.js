module.exports = async function (context, req) {
  const date = "2022-05-27T07:10:54.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

