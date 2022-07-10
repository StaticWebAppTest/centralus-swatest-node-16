module.exports = async function (context, req) {
  const date = "2022-07-10T14:09:14.489Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

