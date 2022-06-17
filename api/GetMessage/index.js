module.exports = async function (context, req) {
  const date = "2022-06-17T11:09:15.306Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

