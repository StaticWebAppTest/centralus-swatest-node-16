module.exports = async function (context, req) {
  const date = "2022-08-12T23:10:39.669Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

