module.exports = async function (context, req) {
  const date = "2023-07-19T17:08:08.725Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

