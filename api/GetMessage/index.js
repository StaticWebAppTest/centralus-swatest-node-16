module.exports = async function (context, req) {
  const date = "2022-08-07T10:11:03.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

