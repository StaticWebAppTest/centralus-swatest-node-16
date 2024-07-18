module.exports = async function (context, req) {
  const date = "2024-07-18T18:14:22.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

