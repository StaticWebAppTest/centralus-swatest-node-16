module.exports = async function (context, req) {
  const date = "2024-09-02T11:09:17.105Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

