module.exports = async function (context, req) {
  const date = "2023-09-03T05:07:29.144Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

