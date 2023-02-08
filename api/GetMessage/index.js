module.exports = async function (context, req) {
  const date = "2023-02-08T09:10:24.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

