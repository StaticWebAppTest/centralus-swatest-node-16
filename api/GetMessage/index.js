module.exports = async function (context, req) {
  const date = "2022-06-21T21:09:12.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

