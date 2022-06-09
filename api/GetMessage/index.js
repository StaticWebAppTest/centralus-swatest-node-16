module.exports = async function (context, req) {
  const date = "2022-06-09T19:09:25.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

