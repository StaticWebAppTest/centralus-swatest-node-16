module.exports = async function (context, req) {
  const date = "2022-08-18T06:15:15.956Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

