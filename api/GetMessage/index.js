module.exports = async function (context, req) {
  const date = "2023-03-02T07:09:54.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

