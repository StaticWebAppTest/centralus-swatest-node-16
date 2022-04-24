module.exports = async function (context, req) {
  const date = "2022-04-24T22:10:08.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

