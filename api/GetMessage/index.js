module.exports = async function (context, req) {
  const date = "2023-02-19T11:07:35.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

