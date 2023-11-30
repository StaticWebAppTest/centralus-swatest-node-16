module.exports = async function (context, req) {
  const date = "2023-11-30T18:11:52.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

