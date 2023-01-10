module.exports = async function (context, req) {
  const date = "2023-01-10T00:53:07.665Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

