module.exports = async function (context, req) {
  const date = "2023-10-05T09:09:02.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

