module.exports = async function (context, req) {
  const date = "2022-07-21T19:09:52.110Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

