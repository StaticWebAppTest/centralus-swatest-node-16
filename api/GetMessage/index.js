module.exports = async function (context, req) {
  const date = "2023-01-01T11:07:07.252Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

