module.exports = async function (context, req) {
  const date = "2022-08-23T17:15:27.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

