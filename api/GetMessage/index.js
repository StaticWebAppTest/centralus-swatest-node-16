module.exports = async function (context, req) {
  const date = "2023-06-11T20:08:28.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

