module.exports = async function (context, req) {
  const date = "2023-04-19T21:07:54.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

