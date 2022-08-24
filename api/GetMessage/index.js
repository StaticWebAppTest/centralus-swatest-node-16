module.exports = async function (context, req) {
  const date = "2022-08-24T23:11:24.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

