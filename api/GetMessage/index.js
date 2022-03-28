module.exports = async function (context, req) {
  const date = "2022-03-28T19:07:54.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

