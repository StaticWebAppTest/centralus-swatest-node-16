module.exports = async function (context, req) {
  const date = "2022-08-21T07:10:10.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

