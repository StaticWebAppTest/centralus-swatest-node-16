module.exports = async function (context, req) {
  const date = "2023-10-28T12:14:47.982Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

