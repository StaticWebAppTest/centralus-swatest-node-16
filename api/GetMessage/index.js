module.exports = async function (context, req) {
  const date = "2023-02-15T14:09:40.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

