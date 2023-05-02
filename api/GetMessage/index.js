module.exports = async function (context, req) {
  const date = "2023-05-02T03:09:08.338Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

