module.exports = async function (context, req) {
  const date = "2023-08-19T20:07:44.532Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

