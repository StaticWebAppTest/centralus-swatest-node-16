module.exports = async function (context, req) {
  const date = "2022-06-27T13:36:48.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

