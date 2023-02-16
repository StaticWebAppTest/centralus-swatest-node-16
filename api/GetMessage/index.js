module.exports = async function (context, req) {
  const date = "2023-02-16T04:12:14.087Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

