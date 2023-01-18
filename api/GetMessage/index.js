module.exports = async function (context, req) {
  const date = "2023-01-18T15:10:03.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

