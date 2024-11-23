module.exports = async function (context, req) {
  const date = "2024-11-23T07:11:22.436Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

