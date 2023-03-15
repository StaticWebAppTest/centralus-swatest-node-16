module.exports = async function (context, req) {
  const date = "2023-03-15T13:18:10.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

