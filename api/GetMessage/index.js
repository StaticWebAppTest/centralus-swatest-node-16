module.exports = async function (context, req) {
  const date = "2022-05-07T06:13:45.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

