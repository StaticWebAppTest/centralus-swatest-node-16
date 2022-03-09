module.exports = async function (context, req) {
  const date = "2022-03-09T13:15:54.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

