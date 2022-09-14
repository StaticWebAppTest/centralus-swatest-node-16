module.exports = async function (context, req) {
  const date = "2022-09-14T20:14:12.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

