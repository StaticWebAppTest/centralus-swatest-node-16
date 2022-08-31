module.exports = async function (context, req) {
  const date = "2022-08-31T23:11:28.648Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

