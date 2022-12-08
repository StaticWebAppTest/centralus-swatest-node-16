module.exports = async function (context, req) {
  const date = "2022-12-08T07:09:10.912Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

