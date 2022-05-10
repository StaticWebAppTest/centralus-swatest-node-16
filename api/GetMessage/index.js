module.exports = async function (context, req) {
  const date = "2022-05-10T22:10:50.534Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

