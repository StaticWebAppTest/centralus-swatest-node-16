module.exports = async function (context, req) {
  const date = "2022-08-30T18:14:01.063Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

