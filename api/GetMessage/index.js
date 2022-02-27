module.exports = async function (context, req) {
  const date = "2022-02-27T13:12:25.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

