module.exports = async function (context, req) {
  const date = "2023-05-15T13:12:22.495Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

