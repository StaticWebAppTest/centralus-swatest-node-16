module.exports = async function (context, req) {
  const date = "2022-08-15T15:12:07.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

