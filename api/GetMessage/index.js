module.exports = async function (context, req) {
  const date = "2023-03-04T17:08:08.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

