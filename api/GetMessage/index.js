module.exports = async function (context, req) {
  const date = "2022-03-11T19:07:55.802Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

