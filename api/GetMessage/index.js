module.exports = async function (context, req) {
  const date = "2022-10-16T19:12:30.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

