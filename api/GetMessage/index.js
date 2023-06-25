module.exports = async function (context, req) {
  const date = "2023-06-25T18:11:35.619Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

