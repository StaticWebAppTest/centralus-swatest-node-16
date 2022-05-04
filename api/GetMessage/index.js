module.exports = async function (context, req) {
  const date = "2022-05-04T13:37:21.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

