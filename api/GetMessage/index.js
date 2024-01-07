module.exports = async function (context, req) {
  const date = "2024-01-07T06:11:32.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

