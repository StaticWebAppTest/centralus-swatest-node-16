module.exports = async function (context, req) {
  const date = "2022-08-30T19:09:16.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

