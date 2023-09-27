module.exports = async function (context, req) {
  const date = "2023-09-27T03:09:18.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

