module.exports = async function (context, req) {
  const date = "2023-09-04T21:07:24.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

