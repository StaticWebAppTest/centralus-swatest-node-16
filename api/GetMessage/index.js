module.exports = async function (context, req) {
  const date = "2023-03-13T09:10:22.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

