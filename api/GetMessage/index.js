module.exports = async function (context, req) {
  const date = "2022-11-17T08:15:45.140Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

