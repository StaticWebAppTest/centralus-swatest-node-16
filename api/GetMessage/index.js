module.exports = async function (context, req) {
  const date = "2022-05-14T20:11:09.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

