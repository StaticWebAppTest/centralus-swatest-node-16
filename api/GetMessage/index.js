module.exports = async function (context, req) {
  const date = "2023-12-03T11:07:04.977Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

