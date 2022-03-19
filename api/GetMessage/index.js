module.exports = async function (context, req) {
  const date = "2022-03-19T08:11:36.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

