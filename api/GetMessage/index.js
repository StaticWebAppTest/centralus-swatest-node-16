module.exports = async function (context, req) {
  const date = "2023-06-02T07:08:14.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

