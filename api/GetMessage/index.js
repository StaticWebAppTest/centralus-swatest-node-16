module.exports = async function (context, req) {
  const date = "2023-04-21T09:09:05.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

