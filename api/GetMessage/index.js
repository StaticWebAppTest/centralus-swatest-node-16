module.exports = async function (context, req) {
  const date = "2023-12-10T21:07:30.519Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

