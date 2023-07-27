module.exports = async function (context, req) {
  const date = "2023-07-27T13:11:40.841Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

