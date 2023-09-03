module.exports = async function (context, req) {
  const date = "2023-09-03T11:06:25.122Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

