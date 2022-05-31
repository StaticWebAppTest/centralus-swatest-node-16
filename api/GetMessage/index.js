module.exports = async function (context, req) {
  const date = "2022-05-31T07:11:14.924Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

