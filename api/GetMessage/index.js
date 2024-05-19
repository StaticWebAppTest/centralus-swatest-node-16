module.exports = async function (context, req) {
  const date = "2024-05-19T16:11:36.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

