module.exports = async function (context, req) {
  const date = "2023-07-11T18:12:23.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

