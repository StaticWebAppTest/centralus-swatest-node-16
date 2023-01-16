module.exports = async function (context, req) {
  const date = "2023-01-16T12:18:08.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

