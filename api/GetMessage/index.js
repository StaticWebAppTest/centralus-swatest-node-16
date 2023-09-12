module.exports = async function (context, req) {
  const date = "2023-09-12T05:08:20.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

