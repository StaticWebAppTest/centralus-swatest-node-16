module.exports = async function (context, req) {
  const date = "2024-10-04T15:12:19.260Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

