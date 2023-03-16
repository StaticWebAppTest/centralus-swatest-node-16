module.exports = async function (context, req) {
  const date = "2023-03-16T17:09:13.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

