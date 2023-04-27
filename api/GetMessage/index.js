module.exports = async function (context, req) {
  const date = "2023-04-27T13:11:48.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

