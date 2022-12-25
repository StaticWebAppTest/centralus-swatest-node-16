module.exports = async function (context, req) {
  const date = "2022-12-25T15:08:43.800Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

