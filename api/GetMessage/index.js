module.exports = async function (context, req) {
  const date = "2022-10-10T16:20:22.349Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

