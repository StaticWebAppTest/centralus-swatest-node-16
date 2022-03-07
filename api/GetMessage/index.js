module.exports = async function (context, req) {
  const date = "2022-03-07T17:13:33.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

