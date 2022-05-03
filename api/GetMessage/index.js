module.exports = async function (context, req) {
  const date = "2022-05-03T17:27:10.473Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

