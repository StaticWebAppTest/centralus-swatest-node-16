module.exports = async function (context, req) {
  const date = "2023-02-25T19:07:36.293Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

