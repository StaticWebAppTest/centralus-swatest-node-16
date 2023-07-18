module.exports = async function (context, req) {
  const date = "2023-07-18T15:09:34.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

