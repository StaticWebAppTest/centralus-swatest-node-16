module.exports = async function (context, req) {
  const date = "2023-02-25T13:14:31.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

