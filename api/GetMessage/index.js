module.exports = async function (context, req) {
  const date = "2022-12-11T13:15:10.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

