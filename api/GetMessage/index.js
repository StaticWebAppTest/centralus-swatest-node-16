module.exports = async function (context, req) {
  const date = "2023-03-06T09:10:56.805Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

