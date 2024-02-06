module.exports = async function (context, req) {
  const date = "2024-02-06T07:08:12.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

