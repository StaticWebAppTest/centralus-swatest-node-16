module.exports = async function (context, req) {
  const date = "2023-04-11T05:08:34.329Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

