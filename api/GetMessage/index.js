module.exports = async function (context, req) {
  const date = "2022-08-09T19:09:54.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

