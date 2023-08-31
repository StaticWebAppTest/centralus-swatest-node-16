module.exports = async function (context, req) {
  const date = "2023-08-31T06:11:34.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

