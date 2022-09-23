module.exports = async function (context, req) {
  const date = "2022-09-23T23:13:20.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

