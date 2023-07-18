module.exports = async function (context, req) {
  const date = "2023-07-18T14:08:54.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

