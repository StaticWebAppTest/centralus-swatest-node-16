module.exports = async function (context, req) {
  const date = "2022-08-08T06:14:31.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

