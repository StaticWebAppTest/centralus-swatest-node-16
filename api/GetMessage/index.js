module.exports = async function (context, req) {
  const date = "2022-07-08T18:12:54.021Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

