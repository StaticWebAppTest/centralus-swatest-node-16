module.exports = async function (context, req) {
  const date = "2022-06-19T22:09:46.706Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

