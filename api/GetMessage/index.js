module.exports = async function (context, req) {
  const date = "2022-09-07T01:11:08.615Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

