module.exports = async function (context, req) {
  const date = "2022-11-15T20:11:09.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

