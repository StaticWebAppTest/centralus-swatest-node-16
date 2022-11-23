module.exports = async function (context, req) {
  const date = "2022-11-23T19:08:22.759Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

