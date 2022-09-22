module.exports = async function (context, req) {
  const date = "2022-09-22T07:26:30.748Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

