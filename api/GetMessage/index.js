module.exports = async function (context, req) {
  const date = "2023-11-07T13:11:05.705Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

