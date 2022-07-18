module.exports = async function (context, req) {
  const date = "2022-07-18T08:15:03.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

