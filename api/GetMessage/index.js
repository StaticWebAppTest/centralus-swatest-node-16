module.exports = async function (context, req) {
  const date = "2023-05-27T11:06:47.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

