module.exports = async function (context, req) {
  const date = "2022-08-09T08:14:10.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

