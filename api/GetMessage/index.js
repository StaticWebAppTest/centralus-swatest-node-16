module.exports = async function (context, req) {
  const date = "2022-05-06T21:09:50.311Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

