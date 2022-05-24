module.exports = async function (context, req) {
  const date = "2022-05-24T08:14:51.059Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

