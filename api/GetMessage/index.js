module.exports = async function (context, req) {
  const date = "2024-11-02T11:09:01.414Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

