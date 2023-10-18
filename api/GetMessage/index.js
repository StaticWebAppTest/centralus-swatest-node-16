module.exports = async function (context, req) {
  const date = "2023-10-18T05:08:28.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

