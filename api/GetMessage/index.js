module.exports = async function (context, req) {
  const date = "2022-03-19T07:09:16.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

