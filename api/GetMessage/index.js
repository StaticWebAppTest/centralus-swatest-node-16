module.exports = async function (context, req) {
  const date = "2024-05-14T00:44:03.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

