module.exports = async function (context, req) {
  const date = "2023-06-10T17:07:11.629Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

