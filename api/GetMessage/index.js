module.exports = async function (context, req) {
  const date = "2022-03-23T10:11:11.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

