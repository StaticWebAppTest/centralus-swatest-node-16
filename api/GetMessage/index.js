module.exports = async function (context, req) {
  const date = "2022-05-31T03:52:03.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

