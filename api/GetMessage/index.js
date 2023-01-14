module.exports = async function (context, req) {
  const date = "2023-01-14T19:07:07.360Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

