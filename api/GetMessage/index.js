module.exports = async function (context, req) {
  const date = "2023-10-18T15:09:19.640Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

