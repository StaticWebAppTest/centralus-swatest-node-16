module.exports = async function (context, req) {
  const date = "2023-09-02T08:09:53.747Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

