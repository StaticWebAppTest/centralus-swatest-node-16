module.exports = async function (context, req) {
  const date = "2024-06-12T23:10:08.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

