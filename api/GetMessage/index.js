module.exports = async function (context, req) {
  const date = "2023-12-01T05:09:10.722Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

