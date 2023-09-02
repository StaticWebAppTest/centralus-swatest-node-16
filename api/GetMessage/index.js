module.exports = async function (context, req) {
  const date = "2023-09-02T16:09:46.981Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

