module.exports = async function (context, req) {
  const date = "2024-07-25T16:13:27.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

