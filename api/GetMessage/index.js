module.exports = async function (context, req) {
  const date = "2022-04-11T21:09:45.913Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

