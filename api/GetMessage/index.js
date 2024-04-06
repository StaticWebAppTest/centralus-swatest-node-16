module.exports = async function (context, req) {
  const date = "2024-04-06T09:09:08.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

