module.exports = async function (context, req) {
  const date = "2022-08-09T15:11:52.506Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

