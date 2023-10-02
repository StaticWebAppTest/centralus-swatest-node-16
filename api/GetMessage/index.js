module.exports = async function (context, req) {
  const date = "2023-10-02T08:12:01.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

