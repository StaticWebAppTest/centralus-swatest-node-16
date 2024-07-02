module.exports = async function (context, req) {
  const date = "2024-07-02T14:09:55.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

