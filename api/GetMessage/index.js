module.exports = async function (context, req) {
  const date = "2023-03-03T16:13:00.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

