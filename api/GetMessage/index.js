module.exports = async function (context, req) {
  const date = "2022-02-24T20:10:31.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

