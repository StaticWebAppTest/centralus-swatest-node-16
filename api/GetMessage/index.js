module.exports = async function (context, req) {
  const date = "2023-12-04T17:08:47.078Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

