module.exports = async function (context, req) {
  const date = "2024-08-24T16:11:42.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

