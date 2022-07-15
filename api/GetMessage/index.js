module.exports = async function (context, req) {
  const date = "2022-07-15T15:11:59.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

