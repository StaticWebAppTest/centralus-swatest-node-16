module.exports = async function (context, req) {
  const date = "2024-07-25T07:11:16.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

