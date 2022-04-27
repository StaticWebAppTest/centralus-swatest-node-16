module.exports = async function (context, req) {
  const date = "2022-04-27T13:29:10.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

