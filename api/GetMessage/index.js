module.exports = async function (context, req) {
  const date = "2023-12-23T11:07:19.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

