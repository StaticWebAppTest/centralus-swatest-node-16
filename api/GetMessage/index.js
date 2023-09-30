module.exports = async function (context, req) {
  const date = "2023-09-30T22:07:15.755Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

