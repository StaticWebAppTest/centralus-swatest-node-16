module.exports = async function (context, req) {
  const date = "2022-04-03T10:11:08.579Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

