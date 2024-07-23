module.exports = async function (context, req) {
  const date = "2024-07-23T13:14:00.942Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

