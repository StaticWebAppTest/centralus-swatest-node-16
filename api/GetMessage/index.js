module.exports = async function (context, req) {
  const date = "2024-07-11T12:19:31.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

