module.exports = async function (context, req) {
  const date = "2022-05-24T23:11:48.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

