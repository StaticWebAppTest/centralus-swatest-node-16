module.exports = async function (context, req) {
  const date = "2024-08-16T15:10:16.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

