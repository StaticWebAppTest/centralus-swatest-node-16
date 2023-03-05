module.exports = async function (context, req) {
  const date = "2023-03-05T09:09:25.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

