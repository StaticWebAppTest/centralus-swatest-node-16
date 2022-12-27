module.exports = async function (context, req) {
  const date = "2022-12-27T13:13:46.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

