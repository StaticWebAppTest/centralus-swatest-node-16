module.exports = async function (context, req) {
  const date = "2023-12-18T18:11:42.699Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

