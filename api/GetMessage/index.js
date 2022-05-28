module.exports = async function (context, req) {
  const date = "2022-05-28T10:11:57.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

