module.exports = async function (context, req) {
  const date = "2024-03-14T21:08:45.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

