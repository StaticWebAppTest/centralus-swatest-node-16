module.exports = async function (context, req) {
  const date = "2022-10-24T16:21:38.365Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

