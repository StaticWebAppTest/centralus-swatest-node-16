module.exports = async function (context, req) {
  const date = "2022-03-17T20:11:10.568Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

