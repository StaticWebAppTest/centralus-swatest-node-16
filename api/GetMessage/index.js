module.exports = async function (context, req) {
  const date = "2022-11-30T17:09:45.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

