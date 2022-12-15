module.exports = async function (context, req) {
  const date = "2022-12-15T13:19:02.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

