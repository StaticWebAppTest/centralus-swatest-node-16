module.exports = async function (context, req) {
  const date = "2023-12-12T02:24:20.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

