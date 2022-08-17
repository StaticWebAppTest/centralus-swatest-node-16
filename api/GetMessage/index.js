module.exports = async function (context, req) {
  const date = "2022-08-17T05:01:50.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

