module.exports = async function (context, req) {
  const date = "2024-04-24T12:19:52.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

