module.exports = async function (context, req) {
  const date = "2023-04-10T09:09:07.159Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

