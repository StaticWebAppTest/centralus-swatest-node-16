module.exports = async function (context, req) {
  const date = "2023-06-12T13:12:10.333Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

