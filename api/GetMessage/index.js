module.exports = async function (context, req) {
  const date = "2024-07-11T13:14:03.268Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

