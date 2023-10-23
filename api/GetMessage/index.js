module.exports = async function (context, req) {
  const date = "2023-10-23T14:08:51.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

