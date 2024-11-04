module.exports = async function (context, req) {
  const date = "2024-11-04T15:13:02.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

