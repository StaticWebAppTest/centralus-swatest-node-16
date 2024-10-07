module.exports = async function (context, req) {
  const date = "2024-10-07T23:11:10.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

