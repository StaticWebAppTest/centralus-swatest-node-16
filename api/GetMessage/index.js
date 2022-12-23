module.exports = async function (context, req) {
  const date = "2022-12-23T13:14:36.001Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

