module.exports = async function (context, req) {
  const date = "2023-05-03T05:08:51.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

