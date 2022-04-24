module.exports = async function (context, req) {
  const date = "2022-04-24T14:09:51.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

