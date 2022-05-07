module.exports = async function (context, req) {
  const date = "2022-05-07T00:50:44.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

