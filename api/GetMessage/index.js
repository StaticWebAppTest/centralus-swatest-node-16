module.exports = async function (context, req) {
  const date = "2022-05-11T19:10:15.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

