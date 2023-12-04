module.exports = async function (context, req) {
  const date = "2023-12-04T15:09:53.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

