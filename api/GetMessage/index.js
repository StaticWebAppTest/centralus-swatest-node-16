module.exports = async function (context, req) {
  const date = "2023-03-13T11:08:03.433Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

