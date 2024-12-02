module.exports = async function (context, req) {
  const date = "2024-12-02T14:12:09.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

