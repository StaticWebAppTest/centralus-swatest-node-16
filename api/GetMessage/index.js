module.exports = async function (context, req) {
  const date = "2022-07-10T22:10:29.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

