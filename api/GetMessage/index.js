module.exports = async function (context, req) {
  const date = "2023-07-18T06:12:28.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

