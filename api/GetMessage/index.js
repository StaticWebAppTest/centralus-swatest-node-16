module.exports = async function (context, req) {
  const date = "2022-03-09T21:09:20.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

