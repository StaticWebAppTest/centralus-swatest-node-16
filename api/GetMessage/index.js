module.exports = async function (context, req) {
  const date = "2023-08-09T07:08:30.512Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

