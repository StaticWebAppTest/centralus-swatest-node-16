module.exports = async function (context, req) {
  const date = "2022-07-27T19:10:02.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

