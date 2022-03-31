module.exports = async function (context, req) {
  const date = "2022-03-31T23:11:07.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

