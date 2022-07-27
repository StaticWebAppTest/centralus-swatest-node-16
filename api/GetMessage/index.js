module.exports = async function (context, req) {
  const date = "2022-07-27T09:10:38.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

