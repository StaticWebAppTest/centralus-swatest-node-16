module.exports = async function (context, req) {
  const date = "2022-07-09T21:09:25.769Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

