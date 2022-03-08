module.exports = async function (context, req) {
  const date = "2022-03-08T20:11:02.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

