module.exports = async function (context, req) {
  const date = "2022-12-24T18:10:25.408Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

