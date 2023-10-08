module.exports = async function (context, req) {
  const date = "2023-10-08T13:08:47.628Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

