module.exports = async function (context, req) {
  const date = "2023-11-16T09:09:21.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

