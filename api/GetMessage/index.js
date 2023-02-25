module.exports = async function (context, req) {
  const date = "2023-02-25T07:08:45.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

