module.exports = async function (context, req) {
  const date = "2023-08-18T07:07:49.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

