module.exports = async function (context, req) {
  const date = "2022-10-01T05:55:39.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

