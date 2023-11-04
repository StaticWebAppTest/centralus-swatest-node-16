module.exports = async function (context, req) {
  const date = "2023-11-04T21:07:03.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

