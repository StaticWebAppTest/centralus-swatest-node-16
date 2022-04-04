module.exports = async function (context, req) {
  const date = "2022-04-04T22:09:50.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

