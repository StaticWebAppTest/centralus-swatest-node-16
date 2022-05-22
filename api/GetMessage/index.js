module.exports = async function (context, req) {
  const date = "2022-05-22T23:11:17.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

