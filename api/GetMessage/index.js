module.exports = async function (context, req) {
  const date = "2022-12-08T15:09:49.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

