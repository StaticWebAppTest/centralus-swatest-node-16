module.exports = async function (context, req) {
  const date = "2022-06-08T22:09:53.480Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

