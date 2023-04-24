module.exports = async function (context, req) {
  const date = "2023-04-24T05:08:57.589Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

