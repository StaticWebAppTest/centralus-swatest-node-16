module.exports = async function (context, req) {
  const date = "2022-04-07T10:11:07.213Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

