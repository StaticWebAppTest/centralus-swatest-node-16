module.exports = async function (context, req) {
  const date = "2023-06-04T21:07:30.546Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

