module.exports = async function (context, req) {
  const date = "2022-03-08T17:12:10.363Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

