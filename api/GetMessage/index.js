module.exports = async function (context, req) {
  const date = "2022-10-23T22:12:44.429Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

