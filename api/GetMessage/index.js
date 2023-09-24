module.exports = async function (context, req) {
  const date = "2023-09-24T17:06:53.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

