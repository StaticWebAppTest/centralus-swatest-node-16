module.exports = async function (context, req) {
  const date = "2023-10-02T10:09:35.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

