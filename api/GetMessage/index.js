module.exports = async function (context, req) {
  const date = "2023-09-02T18:09:42.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

