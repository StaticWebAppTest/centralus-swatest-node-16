module.exports = async function (context, req) {
  const date = "2023-02-25T09:09:25.490Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

