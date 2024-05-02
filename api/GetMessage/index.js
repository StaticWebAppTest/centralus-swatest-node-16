module.exports = async function (context, req) {
  const date = "2024-05-02T14:09:07.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

