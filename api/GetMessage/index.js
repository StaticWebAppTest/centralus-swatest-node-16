module.exports = async function (context, req) {
  const date = "2024-12-12T05:12:45.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

