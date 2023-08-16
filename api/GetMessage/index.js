module.exports = async function (context, req) {
  const date = "2023-08-16T21:07:20.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

