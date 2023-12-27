module.exports = async function (context, req) {
  const date = "2023-12-27T20:09:25.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

