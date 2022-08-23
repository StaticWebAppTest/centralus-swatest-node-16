module.exports = async function (context, req) {
  const date = "2022-08-23T14:10:25.296Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

