module.exports = async function (context, req) {
  const date = "2023-02-23T15:10:26.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

