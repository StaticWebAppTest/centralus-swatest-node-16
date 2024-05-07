module.exports = async function (context, req) {
  const date = "2024-05-07T10:10:52.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

