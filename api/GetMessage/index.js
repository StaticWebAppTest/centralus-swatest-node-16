module.exports = async function (context, req) {
  const date = "2022-06-15T13:30:33.878Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

