module.exports = async function (context, req) {
  const date = "2023-12-25T19:07:56.697Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

