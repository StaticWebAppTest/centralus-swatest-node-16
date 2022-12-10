module.exports = async function (context, req) {
  const date = "2022-12-10T23:09:30.192Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

