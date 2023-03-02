module.exports = async function (context, req) {
  const date = "2023-03-02T06:13:25.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

