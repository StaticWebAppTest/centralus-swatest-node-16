module.exports = async function (context, req) {
  const date = "2022-04-09T10:10:42.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

