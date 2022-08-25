module.exports = async function (context, req) {
  const date = "2022-08-25T17:14:59.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

