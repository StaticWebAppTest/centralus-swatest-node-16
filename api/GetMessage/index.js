module.exports = async function (context, req) {
  const date = "2022-05-30T14:12:10.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

