module.exports = async function (context, req) {
  const date = "2022-05-01T07:10:32.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

