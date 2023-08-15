module.exports = async function (context, req) {
  const date = "2023-08-15T21:07:46.335Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

