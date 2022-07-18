module.exports = async function (context, req) {
  const date = "2022-07-18T12:25:45.677Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

