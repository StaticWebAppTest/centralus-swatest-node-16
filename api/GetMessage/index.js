module.exports = async function (context, req) {
  const date = "2023-02-27T13:20:57.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

