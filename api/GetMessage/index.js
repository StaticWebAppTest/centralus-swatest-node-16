module.exports = async function (context, req) {
  const date = "2023-02-02T07:08:47.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

