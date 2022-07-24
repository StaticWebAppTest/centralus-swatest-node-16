module.exports = async function (context, req) {
  const date = "2022-07-24T20:11:19.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

