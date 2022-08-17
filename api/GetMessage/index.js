module.exports = async function (context, req) {
  const date = "2022-08-17T07:09:57.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

