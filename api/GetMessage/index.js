module.exports = async function (context, req) {
  const date = "2023-06-02T02:20:16.478Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

