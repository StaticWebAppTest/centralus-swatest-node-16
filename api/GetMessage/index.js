module.exports = async function (context, req) {
  const date = "2023-09-15T10:09:25.088Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

