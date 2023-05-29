module.exports = async function (context, req) {
  const date = "2023-05-29T06:12:15.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

